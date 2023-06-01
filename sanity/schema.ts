import { type SchemaTypeDefinition } from 'sanity'
import pet from "./pet";
import product from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet, product],
}
