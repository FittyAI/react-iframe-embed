import { EVENT_TYPES } from "./constants";

export const createPayload = (parameters, sessionId) => {
  const payload = {};

  payload.session_id = sessionId;
  payload.timestamp = Date.now().toString();

  switch (parameters.event_type) {
    case EVENT_TYPES.session_start:
      payload.company_identifier = parameters.company_identifier;
      payload.event_type = parameters.event_type;
      payload.user_bio_information = parameters.user_bio_information;
      break;
    case EVENT_TYPES.session_end:
      payload.event_type = parameters.event_type;
      break;
    case EVENT_TYPES.start_exercise:
      payload.exercise_id = parameters.exercise_id;
      payload.event_type = parameters.event_type;
      break;
    case EVENT_TYPES.state_update:
      payload.event_type = parameters.event_type;
      payload.data = parameters.data;
      payload.timestampWeb = "";
      payload.timestampGo = "";
      payload.timestampFlink = "";
  }

  return JSON.stringify(payload);
};
