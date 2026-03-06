import { css, html, LitElement, customElement } from "@eclipse-lyra/core/externals/lit";

const SAMPLE_TASKS_DONE = 3;
const SAMPLE_TASKS_OPEN = 5;
const SAMPLE_MEETINGS = [
    { title: "Standup", time: "Today 9:00", location: "Room A" },
    { title: "Sprint planning", time: "Tomorrow 14:00", location: "Room B" },
    { title: "Design review", time: "Wed 10:00", location: "Call" },
];

@customElement("lyra-dashboard-welcome")
export class DashboardWelcome extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .overview {
            display: grid;
            gap: var(--wa-space-l);
            max-width: 800px;
        }
        .card-header {
            display: flex;
            align-items: center;
            gap: var(--wa-space-s);
            font-weight: 600;
        }
        .stats {
            display: flex;
            gap: var(--wa-space-xl);
            margin-top: var(--wa-space-s);
        }
        .stat {
            display: flex;
            flex-direction: column;
            gap: var(--wa-space-2xs);
        }
        .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--wa-color-brand-fill);
        }
        .stat-label {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
        .meeting-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .meeting-item {
            display: flex;
            flex-direction: column;
            gap: var(--wa-space-2xs);
            padding: var(--wa-space-m) 0;
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .meeting-item:last-child {
            border-bottom: none;
        }
        .meeting-title {
            font-weight: 500;
        }
        .meeting-meta {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
    `;

    protected render() {
        return html`
            <div class="overview">
                <wa-card>
                    <div slot="header" class="card-header">
                        <wa-icon name="list-check"></wa-icon>
                        Tasks
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <span class="stat-value">${SAMPLE_TASKS_OPEN}</span>
                            <span class="stat-label">Open</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${SAMPLE_TASKS_DONE}</span>
                            <span class="stat-label">Done</span>
                        </div>
                    </div>
                </wa-card>
                <wa-card>
                    <div slot="header" class="card-header">
                        <wa-icon name="calendar-days"></wa-icon>
                        Next meetings
                    </div>
                    <ul class="meeting-list">
                        ${SAMPLE_MEETINGS.map(
                            (m) => html`
                                <li class="meeting-item">
                                    <span class="meeting-title">${m.title}</span>
                                    <span class="meeting-meta">${m.time} · ${m.location}</span>
                                </li>
                            `
                        )}
                    </ul>
                </wa-card>
            </div>
        `;
    }
}
