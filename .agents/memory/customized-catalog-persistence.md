---
name: Customized catalog persistence
description: Product constraint for how customized course copies may be stored and shared.
---

Customized course copies must remain temporary and must never modify canonical course data until the user explicitly chooses a durable persistence model.

**Why:** The user has not decided whether customized catalogs should survive browser closure. Choosing browser storage, file export, or server-side storage without that decision would create unintended retention and sharing behavior.

**How to apply:** Keep customization scoped to the current catalog-generation session. If a future request requires reopening after browser closure or sharing a reliable public link, present the persistence options before implementing one.