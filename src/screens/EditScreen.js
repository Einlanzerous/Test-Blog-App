import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <BlogPostForm
    initialValues={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => {
      editBlogPost(id, title, content, () => navigation.pop())
    }} />
};

EditScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
        <FontAwesome name="pencil" size={ 30 } style={{ marginRight: 15 }} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({});

export default EditScreen;
