import React from 'react'
import { Button, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react'

export class SetName extends React.Component{
  constructor(){
    super();
    this.state= {
      name:""
    }
  }


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.setName(this.state.name)
  }

  render(){
    const name = this.state.name
    return (

      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='calendar' circular />
              {' '}Name Plz
            </Header>
            <Form size='large' onSubmit={this.handleSubmit.bind(this)}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                />
                <Button color='teal' fluid size='large' type='submit'>Register</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SetName
