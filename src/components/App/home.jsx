import React from 'react';
import {
  Button,
  ButtonContainer,
  Container,
  Form,
  Input,
  Label,
  Select,
} from '../common';

export const Home = () => (
  <Container inset>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <Form>
      <Label htmlFor="text-input">Text input</Label>
      <Input type="text" name="text-input" placeholder="text input" />
      <Label htmlFor="number-input">Number input</Label>
      <Input type="number" name="number-input" placeholder="number input" />
      <Label htmlFor="select-list">Select list</Label>
      <Select name="select-list">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
      </Select>
    </Form>
    <Button blue type="submit">
      Submit me!
    </Button>
    <ButtonContainer>
      <Button outline>hello</Button>
      <Button red big bigText>
        hello
      </Button>
      <Button big bigText blue>
        there
      </Button>
      <Button redOutline>delilah</Button>
    </ButtonContainer>
  </Container>
);
