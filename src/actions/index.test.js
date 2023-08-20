it("addTicket should create ADD_TICKET action", () => {
  expect(
    actions.addTicket({
      names: "Jo and Jasmine",
      location: "3E",
      issue: "Redux not working!",
      timeOpen: 0,
      formattedWaitTime: "less than a minute ago",
      id: 1,
    })
  ).toEqual({
    type: c.ADD_TICKET,
    names: "Jo and Jasmine",
    location: "3E",
    issue: "Redux not working!",
    timeOpen: 0,
    formattedWaitTime: "less than a minute ago",
    id: 1,
  });
});
it("updateTime should create UPDATE_TIME action", () => {
  expect(actions.updateTime(1, "less than a minute ago")).toEqual({
    type: c.UPDATE_TIME,
    id: 1,
    formattedWaitTime: "less than a minute ago",
  });
});
export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime,
});
export const addTicket = (ticket) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
  return {
    type: c.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime,
    timeOpen: timeOpen,
  };
};