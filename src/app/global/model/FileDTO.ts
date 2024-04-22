import { AbstractDTO } from "./AbstractDTO";
import { ProductDTO } from "./cart/dto/ProductDTO";
import { ServiceDTO } from "./cart/dto/ServiceDTO";
import { UserDTO } from "./user/dto/UserDTO";

export class FileDTO extends AbstractDTO {
  public fileName: string;
  public contentType: String;
  public size: number;
  public fileHash: string;
  public url: string;
  public data: string[];
  public user: UserDTO;
  public service: ServiceDTO;
  public product: ProductDTO
}
