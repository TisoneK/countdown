# Implementation Plan: Pre-Wait Text & Favicon

**Branch**: `001-pre-wait-text-favicon` | **Date**: 2025-01-16 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-pre-wait-text-favicon/spec.md`

## Summary

A minor feature update to the existing Countdown Timer Experience that adds static "Please wait." text above the countdown timer and implements browser tab metadata (title and favicon). The enhancement provides minimal contextual framing while preserving the project's simplicity, anticlimactic nature, and constitutional principles. All functionality remains client-side only with no changes to countdown behavior or timing.

## Technical Context

**Language/Version**: TypeScript 5.0+ (Next.js default)  
**Primary Dependencies**: Next.js 14+ (App Router), React 18+  
**Storage**: N/A (no persistent data required)  
**Testing**: Manual testing (no automated tests specified)  
**Target Platform**: Modern web browsers (client-side only)  
**Project Type**: Single-page web application (enhancement to existing)  
**Performance Goals**: No impact on existing <100ms timer accuracy, <50KB bundle size increase  
**Constraints**: Must comply with Countdown Timer Constitution v1.0.0, no new external dependencies  
**Scale/Scope**: Minor UI enhancement, single user experience, minimal codebase impact

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Required Compliance Gates

- **Simplicity Above All**: ✅ Feature adds only static text and metadata, no configuration options or explainer content
- **Client-Side Only**: ✅ No server-side rendering, external APIs, or database dependencies  
- **Minimal Aesthetic**: ✅ Static text with minimal CSS, simple favicon, no animations or complex UI
- **Intentional Anticlimax**: ✅ Preserves existing end state, no celebration or meaningful interaction
- **Automatic Execution**: ✅ No user interaction required, countdown behavior unchanged
- **Technology Stack**: ✅ Uses existing Next.js App Router, React, TypeScript, minimal CSS only
- **Scope Boundaries**: ✅ Enhances existing experience without becoming configurable or reusable

## Project Structure

### Documentation (this feature)

```text
specs/001-pre-wait-text-favicon/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
# Enhancement to existing Next.js single-page application
app/
├── components/
│   ├── CountdownTimer.tsx      # Existing component (unchanged)
│   └── PreWaitText.tsx         # New static text component
├── layout.tsx                  # Updated with new page title
├── page.tsx                    # Updated to include pre-wait text
└── globals.css                 # Updated with minimal text styling
public/
├── favicon.ico                 # New favicon file
└── (existing assets)
```

**Structure Decision**: Enhancement to existing Next.js single-page application structure. Adding minimal components and assets without changing the fundamental architecture.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| None | No constitutional violations | All gates passed ✅ |

**Overall Complexity**: Minimal - static text component and favicon addition to existing application.

---

## Phase 0: Outline & Research

### Research Tasks

Since all technical context is known and no NEEDS CLARIFICATION markers exist, research phase focuses on best practices for minimal enhancements:

1. **Static text positioning**: Best practices for adding non-interactive text above existing components
2. **Favicon implementation**: Optimal favicon formats and sizes for modern browsers
3. **Page metadata updates**: Next.js metadata API for browser tab titles
4. **Minimal CSS styling**: Tailwind CSS classes for simple text presentation

### Research Findings

**Decision**: Use existing Tailwind CSS classes and Next.js built-in metadata API  
**Rationale**: Leverages existing dependencies, maintains consistency with current implementation  
**Alternatives considered**: Custom CSS files, external icon libraries (rejected for simplicity)

---

## Phase 1: Design & Contracts

### Data Model

**Minimal data requirements** - no new state management needed:
- Static text content: "Please wait."
- Favicon asset reference
- Page title string

### Contracts

**No external APIs required** - enhancement is purely presentational:
- Internal component contract: PreWaitText component interface
- Browser API contracts: favicon loading, title setting

### Quickstart Guide

Implementation steps for developers:
1. Create PreWaitText component with static text
2. Update page.tsx to include pre-wait text above countdown
3. Update layout.tsx metadata for browser tab title
4. Add favicon.ico to public directory
5. Apply minimal CSS styling using existing Tailwind classes

---

## Post-Design Constitution Re-evaluation

### Constitution Compliance Confirmation

All constitutional gates remain satisfied after design phase:

- **Simplicity Above All**: ✅ Static text only, no configuration or complexity
- **Client-Side Only**: ✅ No server-side changes, pure client enhancement
- **Minimal Aesthetic**: ✅ Uses existing Tailwind CSS, no new frameworks
- **Intentional Anticlimax**: ✅ Preserves existing end state unchanged
- **Automatic Execution**: ✅ No user interaction required
- **Technology Stack**: ✅ Uses existing Next.js, React, TypeScript stack
- **Scope Boundaries**: ✅ Enhances existing experience without scope expansion

**Design Phase Complete**: Ready for task generation and implementation.
