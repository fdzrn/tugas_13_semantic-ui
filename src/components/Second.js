import React, {Component} from 'react';
import {
	Grid,
	Segment,
	Placeholder,
	List
} from 'semantic-ui-react';

class Second extends Component {
	render(){
		return(
			<Grid columns={3} stackable>
		    <Grid.Column width={5}>
		      <Segment raised>
		        <Placeholder>
		          <Placeholder.Header image>
		            <Placeholder.Line />
		            <Placeholder.Line />
		          </Placeholder.Header>
		          <Placeholder.Paragraph>
		            <Placeholder.Line length='medium' />
		            <Placeholder.Line length='medium' />
		          </Placeholder.Paragraph>
		        </Placeholder>
		      </Segment>
		    </Grid.Column>

		    <Grid.Column width={7}>
		      <Segment raised>
		        <Placeholder>
		          <Placeholder.Header image>
		            <Placeholder.Line />
		            <Placeholder.Line />
		          </Placeholder.Header>
		          <Placeholder.Paragraph>
		            <Placeholder.Line length='medium' />
		            <Placeholder.Line length='medium' />
		          </Placeholder.Paragraph>
		        </Placeholder>
		      </Segment>
		    </Grid.Column>

		    <Grid.Column width={2}>
		        <List>
		        	<List.Header size='medium'><h4>Website Terkait</h4></List.Header>
					    <List.Item>
					      <List.Icon name='google' />
					      <List.Content>
					        <a href='http://www.google.com'>Google</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='facebook official' />
					      <List.Content>
					        <a href='http://www.facebook.com'>Facebook</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='youtube' />
					      <List.Content>
					        <a href='http://www.youtube.com'>Youtube</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='instagram' />
					      <List.Content>
					        <a href='http://www.instagram.com'>Instagram</a>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Icon name='react' />
					      <List.Content>
					        <a href='http://www.reactjs.org'>React</a>
					      </List.Content>
					    </List.Item>
					  </List>
		    </Grid.Column>
		  </Grid>
		);
	}
}

export default Second;