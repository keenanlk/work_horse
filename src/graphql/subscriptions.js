/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob(
    $filter: ModelSubscriptionJobFilterInput
    $owner: String
  ) {
    onCreateJob(filter: $filter, owner: $owner) {
      id
      name
      date
      description
      labor
      mileage
      partsCost
      partsTax
      total
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob(
    $filter: ModelSubscriptionJobFilterInput
    $owner: String
  ) {
    onUpdateJob(filter: $filter, owner: $owner) {
      id
      name
      date
      description
      labor
      mileage
      partsCost
      partsTax
      total
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob(
    $filter: ModelSubscriptionJobFilterInput
    $owner: String
  ) {
    onDeleteJob(filter: $filter, owner: $owner) {
      id
      name
      date
      description
      labor
      mileage
      partsCost
      partsTax
      total
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
