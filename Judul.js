import React, {Component} from 'react';
import {Text,View, Image} from 'react-native';

export default class Judul extends Component{

	render(){
		return (
		
			<View style={tulisan.bio}>
			<Text style={tulisan.judul}>Selamat Datang Anita</Text>
			<Text></Text>
        	<Text></Text>
       	    <Text></Text>
            <Text></Text>
			<Image source={require('./hah.jpeg')} style={{width:230, height:280,}} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
			 <Text style={tulisan.bio}>Nama : Anita Rachman</Text>
       		 <Text style={tulisan.bio}>Kelas : XI RPL 3</Text>
      		 <Text style={tulisan.bio}>No Absen : 06</Text>
     	  	 <Text style={tulisan.bio}>TTL : Jakarta, 23 Januari 2002</Text>
      		 <Text style={tulisan.bio}>Hobby : Nonton </Text>
			<Text style={tulisan.judul}>{this.props.title}</Text>
			</View>
		)
	}
}

const tulisan = {
	judul:{
		color: "#cd642d",
		fontSize: 25,
		fontWeight: 'bold',
	},

	bio:{
		color:"#693000",
		TextAlign : 'center',
		justifyContent: 'center',
    	alignItems: 'center',

	
	}

};


