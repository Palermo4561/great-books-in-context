export interface GoogleCalendarEventType {
  kind: 'calendar#event'
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description: string
  location: string
  colorId: string
  creator: {
    id: string
    email: string
    displayName: string
    self: boolean
  }
  organizer: {
    id: string
    email: string
    displayName: string
    self: boolean
  }
  start: {
    date: string
    dateTime: string
    timeZone: string
  }
  end: {
    date: string
    dateTime: string
    timeZone: string
  }
  endTimeUnspecified: boolean
  recurrence: [string]
  recurringEventId: string
  originalStartTime: {
    date: string
    dateTime: string
    timeZone: string
  }
  transparency: string
  visibility: string
  iCalUID: string
  sequence: number
  attendees: [
    {
      id: string
      email: string
      displayName: string
      organizer: boolean
      self: boolean
      resource: boolean
      optional: boolean
      responseStatus: string
      comment: string
      additionalGuests: number
    },
  ]
  attendeesOmitted: boolean
  extendedProperties: {
    private: {
      (key: any): string
    }
    shared: {
      (key: any): string
    }
  }
  hangoutLink: string
  conferenceData: {
    createRequest: {
      requestId: string
      conferenceSolutionKey: {
        type: string
      }
      status: {
        statusCode: string
      }
    }
    entryPoints: [
      {
        entryPointType: string
        uri: string
        label: string
        pin: string
        accessCode: string
        meetingCode: string
        passcode: string
        password: string
      },
    ]
    conferenceSolution: {
      key: {
        type: string
      }
      name: string
      iconUri: string
    }
    conferenceId: string
    signature: string
    notes: string
  }
  gadget: {
    type: string
    title: string
    link: string
    iconLink: string
    width: number
    height: number
    display: string
    preferences: {
      (key: any): string
    }
  }
  anyoneCanAddSelf: boolean
  guestsCanInviteOthers: boolean
  guestsCanModify: boolean
  guestsCanSeeOtherGuests: boolean
  privateCopy: boolean
  locked: boolean
  reminders: {
    useDefault: boolean
    overrides: [
      {
        method: string
        minutes: number
      },
    ]
  }
  source: {
    url: string
    title: string
  }
  workingLocationProperties: {
    type: string
    homeOffice: any
    customLocation: {
      label: string
    }
    officeLocation: {
      buildingId: string
      floorId: string
      floorSectionId: string
      deskId: string
      label: string
    }
  }
  outOfOfficeProperties: {
    autoDeclineMode: string
    declineMessage: string
  }
  focusTimeProperties: {
    autoDeclineMode: string
    declineMessage: string
    chatStatus: string
  }
  attachments: [
    {
      fileUrl: string
      title: string
      mimeType: string
      iconLink: string
      fileId: string
    },
  ]
  birthdayProperties: {
    contact: string
    type: string
    customTypeName: string
  }
  eventType: string
}
