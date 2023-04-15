import { FolderInterface } from "@/types/Folder";

export const saveFolders = (folders: FolderInterface[]) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};
