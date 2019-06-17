import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import FormatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";

class Item extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired
	};
	render() {
		const { item } = this.props;
		return (
			<ItemStyles>
				{item.image && <img src={item.image} alt={item.title} />}
				<Title>
					<Link
						href={{
							pathname: "/item",
							query: { id: item.id }
						}}
					>
						<a>{item.title}</a>
					</Link>
				</Title>
				<PriceTag>{FormatMoney(item.price)}</PriceTag>
				<p>{item.desscription}</p>

				<div className="buttonList">
					<Link
						href={{
							pathname: "update",
							query: { id: item.id }
						}}
					>
						<a>Edit ✏️</a>
					</Link>
					<button>Add to Cart</button>
					<DeleteItem id={item.id}>Delete This Item</DeleteItem>
				</div>
			</ItemStyles>
		);
	}
}

export default Item;
