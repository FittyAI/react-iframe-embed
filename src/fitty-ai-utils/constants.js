export const SOCKET_URL = "wss://backenddev.fittyai.com:443";

export const DEFAULT_USER_BIO_INFO = {
  height: 184,
  weight: 77,
  gender: 0,
};

export const EVENT_TYPES = {
  session_start: "session_start",
  session_end: "session_end",
  start_exercise: "start_exercise",
  state_update: "state_update",
};

export const RESPONSE_TYPES = {
  STATE_UPDATE: "state_update",
  STATUS: "connection_status",
  ERROR: "error",
  START_EXERCISE: "start_exercise",
};

export const METRIC_NAMES = {
  METRIC_NAME: "metrics",
  REPS: "rep_count",
  SCORE: "score",
  KCAL: "calories",
  TOTAL_SCORE: "total_score",
};

export const MESSAGE_NAMES = {
  WORKOUT_MESSAGE: "message",
};
