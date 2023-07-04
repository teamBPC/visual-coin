import { TreeMap, TreeMapSeries, TreeMapRect, TreeMapLabel } from "reaviz";
import { mapdata } from "../../datalist";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CoinMapContainer = styled.div``;
const CoinMapInner = styled.div``;

function CoinMap() {
  const viewWidth = useSelector(
    (state: { viewWidth: number }) => state.viewWidth
  );
  const navigate = useNavigate();
  const moveDetail = (data: {
    data: {
      key: string;
      data: number;
      symbol: string;
      unit: string;
    };
    parent: { data: { key: string } };
  }) => {
    const coinid =
      data.parent.data.key.toUpperCase() +
      ":" +
      data.data.symbol +
      data.data.unit;
    navigate(`/${coinid}`);
  };
  return (
    <CoinMapContainer>
      <CoinMapInner>
        <TreeMap
          width={viewWidth - 16}
          height={viewWidth * 0.7}
          data={mapdata}
          series={
            <TreeMapSeries
              label={
                <TreeMapLabel
                  wrap={true}
                  fontSize={16}
                  fontFamily={"Pretendard"}
                  placement={"start"}
                />
              }
              rect={
                <TreeMapRect
                  tooltip={<></>}
                  onMouseEnter={(event, data) => {
                    // console.log("onMouseEnter", event, data);
                  }}
                  onMouseLeave={(event, data) => {
                    // console.log("onMouseLeave", event, data);
                  }}
                  onClick={(event, data) => {
                    moveDetail(data);
                  }}
                />
              }
            />
          }
        />
      </CoinMapInner>
    </CoinMapContainer>
  );
}

export default CoinMap;
