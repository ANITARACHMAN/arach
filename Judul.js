import React, {Component} from 'react';
import {Text} from 'react-native'

class Judul extends Component{
	render(){
		return (
			<Text style={tulisan.judul}>{this.props.title}</Text>
		)
	}
}

const tulisan = {
	judul:{
		color: "#b40036",
		fontSize: 50,
		fontWeight: 'bold'
	}
}

export default Judul;
