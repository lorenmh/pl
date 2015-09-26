### Behavior
Once a user logs on, a websocket is opened with the user and the server.  Once
the websocket successfully connects, the user's `online` property is set to
true.  

Any messages that are sent to a room that the user is logged into will notify
the user via the websocket.  If the user is not currently in that room, they
will be notifified with a counter of unread messages and some identifier
for the room.  

When a user joins a room, the room\_id is set to that room.  All messages that
a user receives from a room that matches their room\_id are automatically set
as `is_read true`.  

When a user creates a room, they select the skills that they are offering, and
the skills that they desire.  

Once another user sees this room, they can attempt to join it.  When attempting
to join, a JoinRoomRequest is created with that users id and the room id.  The
creator of the room is notified and can confirm or deny allowing the user to
enter the room.  

Any users within a room can send messages to the room.  Users can also send
direct messages to users, if they so choose.  

Any users within a room can choose to share video or voice.  This will be done
by opening a WebRTC connection with any users that have the current room as 
their room\_id.  The connection will be set up using WebSockets

Some rooms have rules associated with them.  Currently the two rules are
'trade' and 'no rules'.  Trade means that users alternate discussing their
skill.  For example, if the Room Skills are German and English, the speakers
would alternate between speaking in German or English.


### WebSockets
#### Event Channels
A user will subscribe to event channels.  When events occur, these channels
will be notified.

For example, one channel might be 'Room-1'.  Every user subscribed to this
channel will receive event messages concerning 'Room-1'; messages, joins,
etc.


### Models
_All tables are assumed to have a non-null, unique, incrementing integer pk_

#### User
* { String } username
* { String } password ( bcrypt includes salt with pass )
* { Boolean } online ( will only be used with websockets )
* { Integer } room\_id ( nullable, is updated via websocket )
* { String } first\_name
* { String } last\_name
* { Date } created\_on
* { Geo } location

#### Room
* { String } title
* { Integer } user\_id
* { Integer } max\_users
* { Integer } rules\_id
* { Boolean } private
* { Date } created\_on
* { Date } closed\_on

#### RulesType ( static table )
* { String } text

```
0 | 'NO_RULES'
1 | 'TRADE'
```

#### Rules ( static table )
* { Integer } rules\_type\_id
* { Integer } value ( nullable )

```
0 | 0 | null // No rules
1 | 1 | 15 // Trade every 15 minutes
2 | 1 | 30 // Trade every 30 minutes
```

#### RoomUser
* { Integer } room\_id
* { Integer } user\_id

#### RoomUserOptions
* { Integer } room\_id
* { Integer } user\_id
* { Boolean } email\_notification

#### JoinRoomRequest
* { Integer } room\_id
* { Integer } user\_id
* { String } message
* { Date } timestamp
* { Boolean } accepted ( default null )

#### Message
* { Integer } user\_id
* { Date } timestamp
* { String } message

#### RoomUserMessage
* { Integer } room\_id
* { Integer } user\_id
* { Integer } message\_id
* { Boolean } is\_read

#### UserMessage
* { Integer } user\_id
* { Integer } message\_id
* { Boolean } is\_read

#### RoomSkillOffered
* { Integer } room\_id
* { Integer } subject\_id
* { Integer } level ( ex: 0 - 10 )

#### RoomSkillDesired
* { Integer } room\_id
* { Integer } subject\_id
* { Integer } level ( ex: 0 - 10 )

#### Subject
* { String } title

#### UserSkill
* { Integer } user\_id
* { Integer } subject\_id
* { Integer } level ( ex: 0 - 10 )

#### UserRating
* { Integer } rater\_user\_id
* { Integer } user\_id
* { Integer } level ( ex: 0 - 5 )

