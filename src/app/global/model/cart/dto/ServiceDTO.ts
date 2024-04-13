import { DurationDTO } from "./DurationDTO";
import { SaleItemDTO } from "./SaleItemDTO";
import { ServiceSpecialtyDTO } from "./ServiceSpecialtyDTO";

export class ServiceDTO extends SaleItemDTO {
	public duration: DurationDTO;
	public price: number;
	public specialties: ServiceSpecialtyDTO[];
}
