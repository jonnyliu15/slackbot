# slackbot

TODO
- configure slackbot to sent post requests to localhost 8000
- implement server node.js
    - when /faq
        - pull user.real_name from user.info Slack API using user_id field in response body
        - respond with personalized message using user.real_name i.e "Hey {real_name}! Here is a list of FAQs and their answers!"
    - when /help
        - add hacker info into a giant queue basically
- implement front-end? React obviously
    - could be viewed from the core team side and you can click on people who have been helped 
