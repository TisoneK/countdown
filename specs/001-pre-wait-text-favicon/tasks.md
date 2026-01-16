---

description: "Task list for feature implementation"
---

# Tasks: Pre-Wait Text & Favicon

**Input**: Design documents from `/specs/001-pre-wait-text-favicon/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No automated tests specified - manual testing only per specification requirements.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single-page Next.js**: `app/`, `public/` at repository root
- **Components**: `app/components/` for React components
- **Configuration**: Root level for Next.js config files

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Switch to feature branch 001-pre-wait-text-favicon
- [x] T002 [P] Verify existing project structure and dependencies
- [x] T003 [P] Backup current working state before modifications

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Verify existing CountdownTimer component functionality
- [x] T005 [P] Create favicon.ico file (32x32 hourglass symbol)
- [x] T006 [P] Verify Tailwind CSS configuration for text styling

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Pre-Countdown Text (Priority: P1) 🎯 MVP

**Goal**: Implement static "Please wait." text above the countdown timer that remains visible throughout the countdown and end state.

**Independent Test**: Load page and verify "Please wait." text appears above countdown timer immediately, remains unchanged during countdown, and stays visible after countdown ends.

### Implementation for User Story 1

- [x] T007 [P] [US1] Create PreWaitText component in app/components/PreWaitText.tsx
- [x] T008 [US1] Implement static text content "Please wait." with Tailwind styling
- [x] T009 [US1] Apply text styling (text-4xl, font-mono, text-center, mb-8)
- [x] T010 [US1] Update app/page.tsx to import and include PreWaitText component
- [x] T011 [US1] Modify page layout to use flex-col for vertical stacking
- [x] T012 [US1] Position PreWaitText above CountdownTimer component
- [x] T013 [US1] Verify text visibility during countdown execution
- [x] T014 [US1] Verify text visibility after countdown completion

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Enhanced Browser Tab Experience (Priority: P1)

**Goal**: Implement browser tab title "Please wait" and favicon display for better tab identification and context.

**Independent Test**: Open page in browser and verify tab title shows "Please wait" and favicon (hourglass) appears in browser tab.

### Implementation for User Story 2

- [x] T015 [P] [US2] Add favicon.ico to public directory
- [x] T016 [US2] Update app/layout.tsx metadata title to "Please wait"
- [x] T017 [US2] Verify favicon loads correctly in browser tab
- [x] T018 [US2] Verify page title displays correctly in browser tab
- [x] T019 [US2] Test tab metadata persistence during countdown states
- [x] T020 [US2] Test tab metadata after countdown completion

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements and validation

- [x] T021 [P] Validate pre-wait text appears immediately on page load (SC-001)
- [x] T022 [P] Validate text remains static during countdown (SC-002)
- [x] T023 [P] Validate text remains visible after countdown ends (SC-003)
- [x] T024 [P] Validate browser tab title shows "Please wait" (SC-004)
- [x] T025 [P] Validate favicon displays in browser tab (SC-005)
- [x] T026 [P] Validate countdown behavior unchanged (timing, accuracy) (SC-006)
- [x] T027 [P] Validate end state remains "Okay. That's it." unchanged (SC-007)
- [x] T028 [P] Validate no new user interactions or controls introduced (SC-008)
- [x] T029 [P] Validate bundle size increase <50KB (SC-009)
- [x] T030 [P] Validate constitution compliance (SC-010)
- [x] T031 [P] Test cross-browser compatibility (Chrome, Firefox, Safari, Edge) (SC-011)
- [x] T032 [P] Test mobile device responsiveness (SC-012)
- [x] T033 [P] Final code cleanup and documentation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational phase completion
- **User Story 2 (Phase 4)**: Depends on Foundational phase completion - can run parallel with US1
- **Polish (Phase 5)**: Depends on both User Stories 1 and 2 completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Independent of US1, can run parallel

### Within Each User Story

- Component creation before integration
- Integration before testing and validation
- Testing before polish phase

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- User Stories 1 and 2 can be implemented in parallel after Foundational phase
- Component creation tasks within stories marked [P] can run in parallel
- All validation tasks in Phase 5 can run in parallel

---

## Parallel Example: User Stories 1 & 2

```bash
# Launch both user stories in parallel after Foundational phase:
Task: "Create PreWaitText component in app/components/PreWaitText.tsx"
Task: "Add favicon.ico to public directory"

# Launch integration tasks in parallel:
Task: "Update app/page.tsx to import and include PreWaitText component"
Task: "Update app/layout.tsx metadata title to 'Please wait'"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Pre-wait text)
4. Complete Phase 4: User Story 2 (Browser tab metadata)
5. **STOP and VALIDATE**: Test both stories independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Pre-wait text MVP
3. Add User Story 2 → Test independently → Complete feature
4. Add Phase 5 polish → Final validation and optimization

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Pre-wait text)
   - Developer B: User Story 2 (Browser tab metadata)
3. Stories complete and integrate independently
4. Team completes Phase 5 polish together

---

## Notes

- [P] tasks = different files, no dependencies
- [US1] and [US2] labels map tasks to specific user stories for traceability
- Each user story should be independently completable and testable
- Manual testing required - no automated tests specified
- Stop at any checkpoint to validate story independently
- Avoid: external dependencies, complex state management, user interactions, animations
