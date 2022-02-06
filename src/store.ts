import { writable } from "svelte/store";
import { allCharTypes } from "./utils/utils";

export const selectedTypes = writable([...allCharTypes]);
