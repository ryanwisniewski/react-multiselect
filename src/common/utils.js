import { MultiSelectFilterGroup } from './recordDefinitions';

export const ALL_BY_GROUP = (id, label) =>  { return { groupID: id, label: label, listPosition: 'end', sortOrder: id } }

export const multiSelectClearAll = new MultiSelectFilterGroup({ groupID: -1, label: "Clear All", listPosition: "start", sortOrder: "1" });
export const multiSelectSelectAll = new MultiSelectFilterGroup({ groupID: 0, label: "Select All", listPosition: "end", sortOrder: "1000" });

  