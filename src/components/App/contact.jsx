import React from 'react';

import { Container, Form, Input } from '../common';

export const Contact = () => (
  <Container inset>
    <h1>Contact page</h1>
    <Form>
      <Input type="text" placeholder="title" />
    </Form>
  </Container>
);
