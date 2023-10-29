import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFile {
  filename: string;
}

class UploadCarImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: car_id } = request.params;
    const images = request.files as IFile[];
    const uploadCarImageUseCase = container.resolve(UploadCarImagesUseCase);
    const image_names = images.map((file) => file.filename);

    await uploadCarImageUseCase.execute({
      car_id,
      image_names
    });

    return response.status(201).send();
  }
}

export { UploadCarImagesController };
