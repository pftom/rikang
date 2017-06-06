'use strict';

import queryString from 'query-string';
import _ from 'lodash';

import { header } from './config';

let request = {};

request.get =  ( url, params, token ) => {
  let options = null;
  if (params) {
    url += '?' + queryString.stringify(params);
  }

  if (token) {
    options = _.extend(header('GET', token));
  }


  return fetch(url, options)
      .then(response => {
        if (response.status !== 200 || !response.ok) {
          throw response.json();
        }
        return response.json();
      })
}

request.post = ( url, body ) => {
  let options = _.extend(header('POST'), {
    body: JSON.stringify(body),
  });


  return fetch(url, options)
        .then(response => {
          if (response.status !== 200 || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

request.put = ( url, body ) => {
  let options = _.extend(header('PUT'), {
    body: JSON.stringify(body),
  });

  return fetch(url, options) 
        .then(response => {
          if (response.status !== 200 || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

export default request;
