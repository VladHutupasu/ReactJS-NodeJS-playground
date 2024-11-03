import { IFilter } from "../models/IFilter";

export default function Filters({ filters, setFilters }: { filters: IFilter; setFilters: (value: IFilter) => void }) {
  return (
    <div className="flexRow">
      <input type="checkbox" id="filter1" onChange={(e) => setFilters({ ...filters, filter1: e.target.checked })} />
      <label htmlFor="filter1">Filter #1</label>

      <input type="checkbox" id="filter2" onChange={(e) => setFilters({ ...filters, filter2: e.target.checked })} />
      <label htmlFor="filter2">Filter #2</label>

      <input type="checkbox" id="filter3" onChange={(e) => setFilters({ ...filters, filter3: e.target.checked })} />
      <label htmlFor="filter3">Filter #3</label>
    </div>
  );
}
