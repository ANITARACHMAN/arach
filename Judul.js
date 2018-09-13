import React, {Component} from 'react';
import {Text} from 'react-native'

class Judul extends Component{
	render(){
		return (
		
			<View>
			<Image source={require('./anita.jpg')} style={{width:140, height:200}} />
			 <Text>Nama : Anita Rachman</Text>
       		 <Text>Kelas : XI RPL 3</Text>
      		 <Text>No Absen : 06</Text>
     	  	 <Text>TTL : Jakarta, 23 Januari 2002</Text>
      		 <Text>Hobby : Nonton </Text>
			<Text style={tulisan.judul}>{this.props.title}</Text>
			</View>
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
