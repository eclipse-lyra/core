import { css, html, LitElement, customElement } from "@eclipse-lyra/core/externals/lit";

interface Meeting {
    title: string;
    start: string;
    end: string;
    day: string;
    location: string;
}

const SAMPLE_MEETINGS: Meeting[] = [
    { title: "Standup", start: "9:00", end: "9:15", day: "Mon", location: "Room A" },
    { title: "Sprint planning", start: "14:00", end: "15:30", day: "Tue", location: "Room B" },
    { title: "Design review", start: "10:00", end: "11:00", day: "Wed", location: "Call" },
    { title: "1:1 with manager", start: "16:00", end: "16:30", day: "Thu", location: "Room C" },
    { title: "Retrospective", start: "11:00", end: "12:00", day: "Fri", location: "Room A" },
];

@customElement("lyra-dashboard-meetings")
export class DashboardMeetings extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .calendar-section {
            max-width: 700px;
        }
        .weeheader {
            display: grid;
            grid-template-columns: 3rem repeat(5, 1fr);
            gap: var(--wa-space-s);
            padding: var(--wa-space-s) 0;
            font-size: var(--wa-font-size-s);
            font-weight: 600;
            color: var(--wa-color-text-quiet);
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .day-col {
            text-align: center;
        }
        .meetings-grid {
            display: grid;
            grid-template-columns: 3rem repeat(5, 1fr);
            gap: var(--wa-space-s);
            margin-top: var(--wa-space-m);
        }
        .time-slot {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
            padding-top: var(--wa-space-2xs);
        }
        .day-cell {
            min-height: 80px;
            padding: var(--wa-space-s);
            border-radius: var(--wa-radius-m);
            background: var(--wa-color-neutral-fill-subtle);
        }
        .meeting-card {
            padding: var(--wa-space-s);
            margin-bottom: var(--wa-space-xs);
            border-radius: var(--wa-radius-s);
            background: var(--wa-color-brand-fill);
            color: var(--wa-color-neutral-fill);
            font-size: var(--wa-font-size-s);
        }
        .meeting-card .title {
            font-weight: 600;
        }
        .meeting-card .time {
            opacity: 0.9;
        }
        .meeting-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .meeting-list li {
            padding: var(--wa-space-m);
            border-radius: var(--wa-radius-m);
            background: var(--wa-color-neutral-fill-subtle);
            margin-bottom: var(--wa-space-s);
        }
        .meeting-list .title {
            font-weight: 600;
        }
        .meeting-list .meta {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
            margin-top: var(--wa-space-2xs);
        }
    `;

    protected render() {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        return html`
            <div class="calendar-section">
                <div class="weeheader">
                    <span></span>
                    ${days.map((d) => html`<span class="day-col">${d}</span>`)}
                </div>
                <div class="meetings-grid">
                    <div class="time-slot"></div>
                    ${days.map((day) => {
                        const meetings = SAMPLE_MEETINGS.filter((m) => m.day === day);
                        return html`
                            <div class="day-cell">
                                ${meetings.map(
                                    (m) => html`
                                        <div class="meeting-card">
                                            <div class="title">${m.title}</div>
                                            <div class="time">${m.start} – ${m.end}</div>
                                            <div class="time">${m.location}</div>
                                        </div>
                                    `
                                )}
                            </div>
                        `;
                    })}
                </div>
                <h3 style="margin-top: var(--wa-space-xl); margin-bottom: var(--wa-space-m);">This week</h3>
                <ul class="meeting-list">
                    ${SAMPLE_MEETINGS.map(
                        (m) => html`
                            <li>
                                <span class="title">${m.title}</span>
                                <div class="meta">${m.day} ${m.start} – ${m.end} · ${m.location}</div>
                            </li>
                        `
                    )}
                </ul>
            </div>
        `;
    }
}
