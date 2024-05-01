import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantSearchBar = styled(Searchbar)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Search = ({ onShowFavorite, showFavourite }) => {
  const { keyword, search } = useContext(LocationContext);
  const [keywordSearch, setkeywordSearch] = useState(keyword);

  useEffect(() => {
    setkeywordSearch(keyword);
  }, [keyword]);

  return (
    <>
      <SearchContainer>
        <RestaurantSearchBar
          icon={showFavourite ? "heart" : "heart-outline"}
          iconColor={showFavourite ? "red" : "grey"}
          onIconPress={onShowFavorite}
          placeholder="Search Restaurants"
          elevation={1}
          value={keywordSearch}
          onSubmitEditing={() => {
            search(keywordSearch);
          }}
          onChangeText={(text) => {
            setkeywordSearch(text);
          }}
        />
      </SearchContainer>
    </>
  );
};
