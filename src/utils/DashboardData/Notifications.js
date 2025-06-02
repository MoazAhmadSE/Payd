export const Notification = {
  "status": "success",
  "data": {
    "notif_000": {
      title: "New Update",
      message: "Notification message number 1 with some unique content.",
      timeStamp: "2025-06-01T23:03:00Z",
      isOpen: true,
    },
    "notif_001": {
      title: "New Update",
      message: "Notification message number 2 with some unique content.",
      timeStamp: "2025-06-01T23:48:00Z",
      isOpen: false,
    },
    "notif_002": {
      title: "New Update",
      message: "Notification message number 3 with some unique content.",
      timeStamp: "2025-05-05T10:13:00Z",
      isOpen: false,
    },
    "notif_003": {
      title: "New Update",
      message: "Notification message number 4 with some unique content.",
      timeStamp: "2025-06-01T22:54:00Z",
      isOpen: true,
    },
    "notif_004": {
      title: "New Update",
      message: "Notification message number 5 with some unique content.",
      timeStamp: "2025-05-03T06:25:00Z",
      isOpen: false,
    },
    "notif_005": {
      title: "New Update",
      message: "Notification message number 6 with some unique content.",
      timeStamp: "2025-05-11T10:13:00Z",
      isOpen: true,
    },
    "notif_006": {
      title: "New Update",
      message: "Notification message number 7 with some unique content.",
      timeStamp: "2025-05-22T09:55:00Z",
      isOpen: false,
    },
    "notif_007": {
      title: "New Update",
      message: "Notification message number 8 with some unique content.",
      timeStamp: "2025-05-26T21:45:00Z",
      isOpen: true,
    },
    "notif_008": {
      title: "New Update",
      message: "Notification message number 9 with some unique content.",
      timeStamp: "2025-05-08T04:39:00Z",
      isOpen: false,
    },
    "notif_009": {
      title: "New Update",
      message: "Notification message number 10 with some unique content.",
      timeStamp: "2025-06-01T17:52:00Z",
      isOpen: false,
    },
    "notif_010": {
      title: "New Update",
      message: "Notification message number 11 with some unique content.",
      timeStamp: "2025-06-01T11:48:00Z",
      isOpen: false,
    },
    "notif_011": {
      title: "New Update",
      message: "Notification message number 12 with some unique content.",
      timeStamp: "2025-05-28T02:22:00Z",
      isOpen: false,
    },
    "notif_019": {
      title: "New Update",
      message: "Notification message number 20 with some unique content.",
      timeStamp: "2025-05-21T05:14:00Z",
      isOpen: false,
    },
    "notif_023": {
      title: "New Update",
      message: "Notification message number 24 with some unique content.",
      timeStamp: "2025-05-23T04:19:00Z",
      isOpen: true,
    },
    "notif_024": {
      title: "New Update",
      message: "Notification message number 25 with some unique content.",
      timeStamp: "2025-05-02T05:20:00Z",
      isOpen: true,
    },
    "notif_026": {
      title: "New Update",
      message: "Notification message number 27 with some unique content.",
      timeStamp: "2025-05-21T00:19:00Z",
      isOpen: false,
    },
    "notif_030": {
      title: "New Update",
      message: "Notification message number 31 with some unique content.",
      timeStamp: "2025-05-19T19:44:00Z",
      isOpen: false,
    },
    "notif_033": {
      title: "New Update",
      message: "Notification message number 34 with some unique content.",
      timeStamp: "2025-05-11T10:42:00Z",
      isOpen: false,
    },
    "notif_034": {
      title: "New Update",
      message: "Notification message number 35 with some unique content.",
      timeStamp: "2025-05-18T04:54:00Z",
      isOpen: false,
    },
    "notif_035": {
      title: "New Update",
      message: "Notification message number 36 with some unique content.",
      timeStamp: "2025-05-12T23:11:00Z",
      isOpen: true,
    },
    "notif_036": {
      title: "New Update",
      message: "Notification message number 37 with some unique content.",
      timeStamp: "2025-05-12T11:27:00Z",
      isOpen: true,
    },
    "notif_038": {
      title: "New Update",
      message: "Notification message number 39 with some unique content.",
      timeStamp: "2025-05-27T02:23:00Z",
      isOpen: false,
    },
    "notif_039": {
      title: "New Update",
      message: "Notification message number 40 with some unique content.",
      timeStamp: "2025-05-16T19:33:00Z",
      isOpen: true,
    },
    "notif_040": {
      title: "New Update",
      message: "Notification message number 41 with some unique content.",
      timeStamp: "2025-05-12T13:09:00Z",
      isOpen: true,
    },
    "notif_041": {
      title: "New Update",
      message: "Notification message number 42 with some unique content.",
      timeStamp: "2025-05-23T12:47:00Z",
      isOpen: false,
    },
    "notif_042": {
      title: "New Update",
      message: "Notification message number 43 with some unique content.",
      timeStamp: "2025-05-28T16:17:00Z",
      isOpen: false,
    },
    "notif_044": {
      title: "New Update",
      message: "Notification message number 45 with some unique content.",
      timeStamp: "2025-05-19T04:58:00Z",
      isOpen: false,
    },
    "notif_047": {
      title: "New Update",
      message: "Notification message number 48 with some unique content.",
      timeStamp: "2025-05-02T11:32:00Z",
      isOpen: false,
    },
    "notif_049": {
      title: "New Update",
      message: "Notification message number 50 with some unique content.",
      timeStamp: "2025-05-08T03:03:00Z",
      isOpen: false,
    },
  }
};



export const upadateNofData = (id) => {
  if (Notification.data[id]) {
    Notification.data[id].isOpen = true;
  }
} 