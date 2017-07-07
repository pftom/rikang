'use strict';

import queryString from 'query-string';
import _ from 'lodash';

const header = (METHOD, token, multiform) => {
  let auth = {};
  let multiForm = {};

  if (token) {
    auth = {
      'Authorization': 'Token ' + token,
    }
  }

  // supply some form data submit use multipart/form-data
  if (multiform) {
    multiForm = {
      'Content-Type': 'multipart/form-data',
    }
  }

  return ({
    method: METHOD,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...auth,
      ...multiForm,
    }
  })
}

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

request.post = ( url, body, token ) => {
  let options = _.extend(header('POST', token), {
    body: JSON.stringify(body),
  });

  return fetch(url, options)
        .then(response => {
          console.log(response);
          if (![200, 201].includes(response.status) || !response.ok) {
            throw response.json();
          }
          return response.json();
        })
}

request.put = ( url, token, body, multiform ) => {

  //multiform support
  let options = _.extend(header('PUT', token, multiform), {
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