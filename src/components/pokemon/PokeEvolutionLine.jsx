import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import { capitalize } from "@mui/material";

import arrow from "../../assets/arrow.svg";
import loading from "../../assets/loading.svg";

function PokeEvolutionLine({ evolutionList, evolutionImgList }) {

  function printName(list, imgList) {
    if (list && imgList) {
      if (list.length > 1) {
        return (
          <div className="flex w-fit">
            <div className="my-auto min-w-[100px] max-w-[150px] flex flex-col mx-auto">
              <NavLink to={`/pokemon/${list[0]}`}>
                <img
                  src={imgList[0]}
                  className=" mx-auto min-w-[80px] max-w-[80px] sm:max-w-[95px]
                  md:max-w-[120px]"
                />{" "}
              </NavLink>
              <NavLink
                to={`/pokemon/${list[0]}`}
                className="text-orange-600 text-center hover:underline"
              >
                {capitalize(list[0])}
              </NavLink>
            </div>

            <div className="w-[20px] md:w-[40px] my-auto">
              <img src={arrow} className="rotate-180" />
            </div>
            <div className="flex flex-col pl-4">
              {list.slice(1).map((e, i) => (
                <React.Fragment key={i}>
                  {printName(e, imgList.slice(1)[i])}
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <div className="my-auto min-w-[100px] max-w-[150px] flex flex-col mx-auto">
            <NavLink to={`/pokemon/${list[0]}`}>
              <img
                src={imgList[0]}
                className=" mx-auto min-w-[80px] max-w-[80px] sm:max-w-[95px]
                  md:max-w-[120px]"
              />{" "}
            </NavLink>
            <NavLink
              to={`/pokemon/${list[0]}`}
              className="text-orange-600 text-center hover:underline"
            >
              {capitalize(list[0])}
            </NavLink>
          </div>
        );
      }
    } else {
      return (
        <div className="flex flex-row mx-auto text-white">
          <img className="w-6 animate-spin" src={loading} />
          <p className="my-auto ml-3"> PokeLoading...</p>
        </div>
      );
    }
  }
  return <>{printName(evolutionList, evolutionImgList)}</>;
}

export default PokeEvolutionLine;
