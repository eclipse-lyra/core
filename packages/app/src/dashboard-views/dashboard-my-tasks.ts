import { css, html, LitElement, customElement, state } from "@eclipse-lyra/core/externals/lit";

interface TaskItem {
    id: string;
    title: string;
    done: boolean;
    due?: string;
}

const SAMPLE_TASKS: TaskItem[] = [
    { id: "1", title: "Review pull request #142", done: false, due: "Today" },
    { id: "2", title: "Update documentation", done: true },
    { id: "3", title: "Fix login redirect bug", done: false, due: "Tomorrow" },
    { id: "4", title: "Prepare sprint demo", done: false, due: "Fri" },
    { id: "5", title: "Sync with design team", done: true },
];

@customElement("lyra-dashboard-my-tasks")
export class DashboardMyTasks extends LitElement {
    @state() private tasks = [...SAMPLE_TASKS];

    static styles = css`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .taslist {
            list-style: none;
            padding: 0;
            margin: 0;
            max-width: 600px;
        }
        .tasitem {
            display: flex;
            align-items: center;
            gap: var(--wa-space-m);
            padding: var(--wa-space-m) 0;
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .tasitem:last-child {
            border-bottom: none;
        }
        .tasitem.done .tastitle {
            text-decoration: line-through;
            color: var(--wa-color-text-quiet);
        }
        .tastitle {
            flex: 1;
        }
        .tasdue {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
    `;

    private toggleTask(id: string) {
        this.tasks = this.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    }

    protected render() {
        return html`
            <ul class="taslist">
                ${this.tasks.map(
                    (task) => html`
                        <li class="tasitem ${task.done ? "done" : ""}">
                            <wa-checkbox
                                ?checked=${task.done}
                                @change=${() => this.toggleTask(task.id)}
                                aria-label="${task.title}"
                            ></wa-checkbox>
                            <span class="tastitle">${task.title}</span>
                            ${task.due ? html`<span class="tasdue">${task.due}</span>` : ""}
                        </li>
                    `
                )}
            </ul>
        `;
    }
}
