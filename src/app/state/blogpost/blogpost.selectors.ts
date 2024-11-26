import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogpostState } from './blogpost.state';

const getBlogpostFeatureState = createFeatureSelector<BlogpostState>('posts');

export const getPosts = createSelector(getBlogpostFeatureState, (state) =>
  Object.values(state.posts)
);

export const getPostById = (id: number) =>
  createSelector(getBlogpostFeatureState, (state) => state.posts[id]);
