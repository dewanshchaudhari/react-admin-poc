import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';
const PostEdit = (props) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id"></TextInput>
        <TextInput source="title"></TextInput>
        <TextInput multiline source="body"></TextInput>
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
