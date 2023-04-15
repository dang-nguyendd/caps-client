import { HttpResponse } from "@/types/enum/HttpResponse";
import { OpenAIModel, OpenAIModelID, OpenAIModels } from "@/types/Openai";
import {
  OPENAI_API_HOST,
  OPENAI_API_TYPE,
  OPENAI_API_VERSION,
  OPENAI_ORGANIZATION,
} from "@/utils/app/const";

export const config = {
  runtime: "edge",
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { key } = (await req.json()) as {
      key: string;
    };

    let url = `${OPENAI_API_HOST}/v1/models`;
    if (OPENAI_API_TYPE === "azure") {
      url = `${OPENAI_API_HOST}/openai/deployments?api-version=${OPENAI_API_VERSION}`;
    }

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(OPENAI_API_TYPE === "openai" && {
          Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`,
        }),
        ...(OPENAI_API_TYPE === "azure" && {
          "api-key": `${key ? key : process.env.OPENAI_API_KEY}`,
        }),
        ...(OPENAI_API_TYPE === "openai" &&
          OPENAI_ORGANIZATION && {
            "OpenAI-Organization": OPENAI_ORGANIZATION,
          }),
      },
    });

    if (response.status === HttpResponse.UNAUTHORIZED) {
      return new Response(response.body, {
        status: HttpResponse.INTERNAL_SERVER_ERROR,
        headers: response.headers,
      });
    } else if (response.status !== HttpResponse.OK) {
      console.error(
        `OpenAI API returned an error ${
          response.status
        }: ${await response.text()}`
      );
      throw new Error("OpenAI API returned an error");
    }

    const json = await response.json();

    const models: OpenAIModel[] = json.data
      .map((model: any) => {
        const model_name = OPENAI_API_TYPE === "azure" ? model.model : model.id;
        for (const [key, value] of Object.entries(OpenAIModelID)) {
          if (value === model_name) {
            return {
              id: model.id,
              name: OpenAIModels[value].name,
            };
          }
        }
      })
      .filter(Boolean);

    return new Response(JSON.stringify(models), { status: HttpResponse.OK });
  } catch (error) {
    console.error(error);
    return new Response("Error", {
      status: HttpResponse.INTERNAL_SERVER_ERROR,
    });
  }
};

export default handler;
