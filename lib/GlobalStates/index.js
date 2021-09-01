import { useRecoilState, atom } from "recoil";

import { StringUtils } from "./../Utils"

const GlobalStates = (stateName, defaultValue) => {
  const stateAtom = atom({
    key: stateName,
    default: defaultValue,
  });

  const [recoilState, setRecoilState] = useRecoilState(stateAtom);
  const setState = `set${StringUtils.capitalizeText(stateName)}`;

  return {
    [stateName]: recoilState,
    [setState]: setRecoilState
  };
};

export { GlobalStates };
