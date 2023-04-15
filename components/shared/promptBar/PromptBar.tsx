import { useContext, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import HomeContext from "@/components/shared/home/HomeContext";
import Sidebar from "@/components/shared/navigation/SideBar";
import PromptBarContext from "@/components/shared/promptBar/PromptBarContext";
import { PromptBarSettings } from "@/components/shared/promptBar/PromptBarSettings";
import { PromptFolders } from "@/components/shared/promptBar/PromptFolders";
import { Prompts } from "@/components/shared/promptBar/Prompts";
import { useCreateReducer } from "@/hooks/useCreateReducer";
import { OpenAIModels } from "@/types/Openai";
import { Prompt } from "@/types/Prompt";
import { PromptBarInitialState, initialState } from "@/types/Prompt";
import { savePrompts } from "@/utils/app/prompts";

const PromptBar = () => {
  const { t } = useTranslation("promptbar");

  const promptBarContextValue = useCreateReducer<PromptBarInitialState>({
    initialState,
  });

  const {
    state: { prompts, defaultModelId, showPromptBar },
    dispatch: homeDispatch,
    handleCreateFolder,
  } = useContext(HomeContext);

  const {
    state: { searchTerm, filteredPrompts },
    dispatch: promptDispatch,
  } = promptBarContextValue;

  const handleTogglePromptbar = () => {
    homeDispatch({ field: "showPromptBar", value: !showPromptBar });
    localStorage.setItem("showPromptBar", JSON.stringify(!showPromptBar));
  };

  const handleCreatePrompt = () => {
    if (defaultModelId) {
      const newPrompt: Prompt = {
        id: uuidv4(),
        name: `Prompt ${prompts.length + 1}`,
        description: "",
        content: "",
        model: OpenAIModels[defaultModelId],
        folderId: null,
      };

      const updatedPrompts = [...prompts, newPrompt];

      homeDispatch({ field: "prompts", value: updatedPrompts });

      savePrompts(updatedPrompts);
    }
  };

  const handleDeletePrompt = (prompt: Prompt) => {
    const updatedPrompts = prompts.filter((p) => p.id !== prompt.id);

    homeDispatch({ field: "prompts", value: updatedPrompts });
    savePrompts(updatedPrompts);
  };

  const handleUpdatePrompt = (prompt: Prompt) => {
    const updatedPrompts = prompts.map((p) => {
      if (p.id === prompt.id) {
        return prompt;
      }

      return p;
    });
    homeDispatch({ field: "prompts", value: updatedPrompts });

    savePrompts(updatedPrompts);
  };

  const handleDrop = (e: any) => {
    if (e.dataTransfer) {
      const prompt = JSON.parse(e.dataTransfer.getData("prompt"));

      const updatedPrompt = {
        ...prompt,
        folderId: e.target.dataset.folderId,
      };

      handleUpdatePrompt(updatedPrompt);

      e.target.style.background = "none";
    }
  };

  useEffect(() => {
    if (searchTerm) {
      promptDispatch({
        field: "filteredPrompts",
        value: prompts.filter((prompt) => {
          const searchable =
            prompt.name.toLowerCase() +
            " " +
            prompt.description.toLowerCase() +
            " " +
            prompt.content.toLowerCase();
          return searchable.includes(searchTerm.toLowerCase());
        }),
      });
    } else {
      promptDispatch({ field: "filteredPrompts", value: prompts });
    }
  }, [searchTerm, prompts]);

  return (
    <PromptBarContext.Provider
      value={{
        ...promptBarContextValue,
        handleCreatePrompt,
        handleDeletePrompt,
        handleUpdatePrompt,
      }}
    >
      <Sidebar<Prompt>
        side={"right"}
        isOpen={showPromptBar}
        addItemButtonTitle={t("New prompt")}
        itemComponent={
          <Prompts
            prompts={filteredPrompts.filter((prompt) => !prompt.folderId)}
          />
        }
        folderComponent={<PromptFolders />}
        items={filteredPrompts}
        searchTerm={searchTerm}
        handleSearchTerm={(searchTerm: string) =>
          promptDispatch({ field: "searchTerm", value: searchTerm })
        }
        toggleOpen={handleTogglePromptbar}
        handleCreateItem={handleCreatePrompt}
        handleCreateFolder={() => handleCreateFolder(t("New folder"), "prompt")}
        handleDrop={handleDrop}
      />
    </PromptBarContext.Provider>
  );
};

export default PromptBar;
