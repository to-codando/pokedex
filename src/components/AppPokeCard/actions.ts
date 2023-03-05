import { navigate } from "@/utils/navigate";
import { TcreateActions } from "./types";

const showOverview = () => {
	navigate("#/pokemon");
};

export const createActions: TcreateActions = () => ({
	showOverview,
});
