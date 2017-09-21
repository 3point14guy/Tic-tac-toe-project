ID=10
TOKEN=100
INDEX=2
VALUE='x'
GAMEOVER=false
curl "https://powerful-scrubland-54674.herokuapp.com/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data "{
  \"game\":{
    \"cell\":{
      \"index\":${INDEX},
      \"value\":\"${VALUE}\"
    },
    \"over\":${GAMEOVER}
  }
}"
