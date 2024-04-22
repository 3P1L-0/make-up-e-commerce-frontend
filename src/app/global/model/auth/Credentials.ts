import { AbstractEntity } from "../AbstractEntity";
import { CredentialsDTO } from "./dto";

export class Credentials extends AbstractEntity {
  public constructor() {
    super(new CredentialsDTO());
  }

  public getPassword(): string { return this.getDTO().password; }
  public getUsername(): string { return this.getDTO().username; }

  public equals(o: Object): boolean {
    if(o === this) return true;
    if(!(o instanceof Credentials)) return false;

    let c = o as Credentials;
    return this.checkEqualStrings(this.getPassword(), c.getPassword()) && this.checkEqualStrings(this.getUsername(), c.getUsername());
  }

  public getDTO(): CredentialsDTO { return this.dto<CredentialsDTO>(); }
}
