import styled from "styled-components";
import { IContentItemData } from "../../../interface/iMyPage";

export const MypageContentContainer = styled.div``;
export const MypageContentInner = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;
export const MyContentItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardColor};
  will-change: background-color;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
`;
const ItemTop = styled.div`
  font-size: 1.3rem;
`;
const ItemBottom = styled.div`
  font-weight: bold;
`;
const Exchange = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
const Coin = styled.div`
  margin-top: 0.3rem;
`;
const Price = styled.div`
  font-size: 2rem;
  margin-bottom: 0.4rem;
`;
const Change = styled.div<{ change: string }>`
  font-size: 1.5rem;
  color: ${(props) =>
    props.change === "RISE"
      ? "#16c784"
      : props.change === "FALL"
      ? "#ea3943"
      : "#222"};
`;
const MaterialIcons = styled.span`
  vertical-align: middle;
  font-size: 1.5rem;
`;

export const CreateMyPageContentItem = ({
  data,
  index,
}: {
  data: IContentItemData;
  index: number;
}): JSX.Element => {
  return (
    <MyContentItem key={index}>
      <ItemTop>
        <Exchange>{data.exchange}</Exchange>
        <Coin>{data.coin}</Coin>
      </ItemTop>
      <ItemBottom>
        <Price>
          ₩{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Price>
        <Change change={data.change}>
          {data.change === "EVEN" ? (
            <MaterialIcons
              data-testid="even-icon"
              className="material-symbols-outlined"
            >
              check_indeterminate_small
            </MaterialIcons>
          ) : data.change === "RISE" ? (
            <MaterialIcons
              data-testid="rise-icon"
              className="material-symbols-outlined"
            >
              arrow_drop_up
            </MaterialIcons>
          ) : data.change === "FALL" ? (
            <MaterialIcons
              data-testid="fall-icon"
              className="material-symbols-outlined"
            >
              arrow_drop_down
            </MaterialIcons>
          ) : (
            <></>
          )}
          {data.changeRate}%
        </Change>
      </ItemBottom>
    </MyContentItem>
  );
};
