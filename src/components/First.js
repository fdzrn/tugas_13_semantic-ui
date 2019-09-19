import React, {Component} from 'react';
import {
	Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react';

class First extends Component {
	render(){
		return(
			 <Segment placeholder>
		    <Grid columns={2} stackable textAlign='center'>
		      <Divider vertical>Or</Divider>

		      <Grid.Row verticalAlign='middle'>
		        <Grid.Column>
		          <Header icon>
		            <Icon name='search' />
		            Search Document
		          </Header>

		          <Search placeholder='Search document...' />
		        </Grid.Column>

		        <Grid.Column>
		          <Header icon>
		            <Icon name='file pdf outline' />
		            Add New Document
		          </Header>
		          <Button primary>Create New Document</Button>
		        </Grid.Column>
		      </Grid.Row>
		    </Grid>
		  </Segment>
		);
	}
}

export default First;