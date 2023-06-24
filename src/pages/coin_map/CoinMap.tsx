import { TreeMap } from "reaviz";
import { mapdata } from "../../datalist";

function CoinMap() {
  return (
    <div>
      <TreeMap data={mapdata} width={500} height={500} />
    </div>
  );
}

export default CoinMap;
