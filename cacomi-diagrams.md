# Cacomi - Diagrams (Mermaid)

Este archivo contiene el código Mermaid generado a partir del análisis del backend en Java. Puedes copiar estos bloques y pegarlos en [Mermaid Live Editor](https://mermaid.live/) para exportarlos como `.svg` y reemplazar los archivos actuales (`db-schema.svg` y `architecture-diagram2.svg`) en tu portfolio.

## 1. Architecture Diagram

Este diagrama ilustra la arquitectura completa, destacando el rol del BFF y el backend en Java 25.

```mermaid
graph TD
    %% Styling
    classDef client fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef frontend fill:#ff5d01,stroke:#fff,stroke-width:2px,color:#fff;
    classDef bff fill:#38b2ac,stroke:#fff,stroke-width:2px,color:#fff;
    classDef backend fill:#6db33f,stroke:#fff,stroke-width:2px,color:#fff;
    classDef db fill:#336791,stroke:#fff,stroke-width:2px,color:#fff;
    classDef external fill:#4285f4,stroke:#fff,stroke-width:2px,color:#fff;

    Client[📱 Mobile PWA / Web Client]:::client

    subgraph "Frontend & BFF (Vercel / Cloudflare)"
        AstroUI[🚀 Astro 6 UI + React 19]:::frontend
        BFF[🛡️ Astro API Proxy / Auth]:::bff
        
        Client -->|HTTPS| AstroUI
        Client -->|HTTPS / IndexedDB| Client
        AstroUI -->|Internal API Calls| BFF
    end
    
    subgraph "Backend Infrastructure (Koyeb / Cloud)"
        SpringBoot[☕ Spring Boot 4 / Java 25 Native]:::backend
        Security[🔐 Spring Security + JWT]:::backend
        AiService[🧠 Spring AI]:::backend
        DataLayer[💾 Spring Data JPA + Hibernate]:::backend
        
        BFF -->|REST API + Bearer Token| Security
        Security --> SpringBoot
        SpringBoot --> AiService
        SpringBoot --> DataLayer
    end
    
    subgraph "External Services"
        Gemini[🤖 Google Gemini API]:::external
        Postgres[(🐘 PostgreSQL Database)]:::db
        
        AiService -->|gRPC / HTTP| Gemini
        DataLayer -->|TCP| Postgres
    end
```

## 2. Database Schema (Entity-Relationship)

Este diagrama representa la estructura relacional extraída de las entidades JPA (`@Entity`) en tu backend.

```mermaid
erDiagram
    USER ||--o{ REFRESH_TOKEN : authenticates
    USER ||--o{ USER_GOAL : sets
    USER ||--o{ USER_HEALTH_LOG : tracks
    USER ||--o{ PANTRY_ITEM : manages
    USER ||--o{ RECIPE : creates
    USER ||--o{ WEEKLY_MEAL_PLAN : plans
    
    RECIPE ||--o{ RECIPE_INGREDIENT : contains
    RECIPE ||--|| RECIPE_NUTRITION : has
    RECIPE ||--o{ MEAL_PLAN_RECIPE : used_in
    RECIPE ||--o{ RECIPE_BACKLOG : queued_in
    
    INGREDIENT ||--o{ RECIPE_INGREDIENT : used_as
    INGREDIENT ||--o{ PANTRY_ITEM : stocked_as
    INGREDIENT ||--o{ INGREDIENT_MARKET_PRICE : priced_at
    
    WEEKLY_MEAL_PLAN ||--o{ MEAL_PLAN_RECIPE : schedules
    WEEKLY_MEAL_PLAN ||--o{ WEEKLY_CHECK_IN : evaluated_by
    WEEKLY_MEAL_PLAN ||--o{ MANUAL_TRAINING : trains_from
    WEEKLY_MEAL_PLAN ||--o{ MEAL_PLAN_JOB : generated_by
    
    AI_PLAN_METRICS_LOG ||--o{ AI_MEAL_TRAINING_LOG : contains
```

### Instrucciones para exportar:
1. Ve a [Mermaid Live Editor](https://mermaid.live/).
2. Pega el código del bloque que quieras exportar (sin los backticks ````mermaid ````).
3. Ajusta el tema (Theme) en la configuración si quieres que se vea mejor (ej. cambiar a modo oscuro o claro).
4. Haz clic en el botón de **Download SVG** y guárdalo en la carpeta `src/assets/images/projects/smart-recipe/` de tu portfolio con los nombres correspondientes.
