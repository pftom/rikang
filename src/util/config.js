'use strict';


export const header = (METHOD, token) => ({
  method: METHOD,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': token,
  }
})

export const commonApi = {
  base: 'http://106.14.146.36/',
  news: 'home/news/',
  events: 'home/events/',
  login: 'users/login/',
  changePassword: 'users/change-password',
  profile: 'users/profile/',
};

export const singleApi = (id) => ({
  news_id: `home/news/${id}`,
  event_id: `home/events/${id}`,
  attend: `home/events/${id}/attend`,
});