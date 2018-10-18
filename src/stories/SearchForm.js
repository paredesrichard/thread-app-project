import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SearchForm from "../components/SearchForm/SearchForm";

storiesOf("SearchForm", module).add("Default", () => <SearchForm />);
