import React from "react";
import { useParams } from "react-router-dom";

export default function ViewBook() {
	const params = useParams();
	return <div>This is the View for {params.id}</div>;
}
