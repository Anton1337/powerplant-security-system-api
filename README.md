# Powerplant Security System Api

## Quick Start

```bash
# Install Express dependencies
npm install

# Run Server
npm run server
```

## Endpoints

### Clock-ins (Unsupported)

Get All Clock-ins: (GET)

- Local env: http://localhost:5000/api/v1/clocks/clockins
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/clocks/clockins

Get Clock-in by ID: (GET)

- Local env: http://localhost:5000/api/v1/clocks/clockins/:id
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/clocks/clockins/:id

Post Clock-in: (POST)

- Local env: http://localhost:5000/api/v1/clocks/clockins/
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/clocks/clockins/

### Clock-outs (Unsupported)

Get All Clock-outs: (GET)

- Local env: http://localhost:5000/api/v1/clocks/clockouts
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/clocks/clockouts

Get Clock-out by ID: (GET)

- Local env: http://localhost:5000/api/v1/clocks/clockouts/:id
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/clocks/clockouts/:id

Post Clock-out: (POST)

- Local env: http://localhost:5000/api/v1/clocks/clockouts
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/clocks/clockouts/

### Events (Use this intead of the others!)

Get all Events: (GET)

- Local env: http://localhost:5000/api/v1/events
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events

Get Event by ID: (GET)

- Local env: http://localhost:5000/api/v1/events/:id
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events/:id

Start Event (clock-in): (POST)

- Local env: http://localhost:5000/api/v1/events/start
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events/start

Add hazmat change: (POST)

- Local env: http://localhost:5000/api/v1/events/hazmat
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events/hazmat
  Payload/Body:
  - "isOn": true/false // If hazmat suit is on or off.

Add coefficient change: (POST)

- Local env: http://localhost:5000/api/v1/events/k
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events/k
  Payload/Body:
  - "value": Integer // What the coefficient value is.

Add room change: (POST)

- Local env: http://localhost:5000/api/v1/events/room
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events/room
- Payload/Body:

  - "currentRoom": Integer between 1-3 // What room we are in now.

End Event (clock-out): (POST)

- Local env: http://localhost:5000/api/v1/events/end
- Prod env: https://powerplant-security-system-api.herokuapp.com/api/v1/events/end
  Payload/Body:
  - "radiation": how much radiation we have accumulated during our shift.
