import Image from "next/image";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Command,
  Cpu,
  Database,
  HardDrive,
  Laptop,
  LockKeyhole,
  Monitor,
  MoreHorizontal,
  Network,
  Radio,
  RefreshCw,
  Search,
  Server,
  Shield,
  ShieldCheck,
  ShieldEllipsis,
  Terminal,
  Users,
  Wifi,
  X,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";

function Brand() {
  return (
    <Link href="/" className="endpoint-brand" aria-label="Vorqara home">
      <Image
        src="/brand/vorqara-logo-horizontal-dark.svg"
        alt="Vorqara Technologies"
        className="vorqara-logo-image"
        width={470} height={108}
      />
    </Link>
  );
}

function Header() {
  return (
    <header className="endpoint-header">
      <div className="endpoint-header-inner">
        <Brand />
        <nav className="endpoint-desktop-nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="endpoint-header-cta" href="/contact">
          Talk to Vorqara <ArrowUpRight size={15} />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="endpoint-footer">
      <div className="endpoint-footer-inner">
        <div>
          <Brand />
          <p>Security and infrastructure, connected.</p>
        </div>
        <div className="endpoint-footer-links">
          <Link href="/about">About</Link>
          <Link href="/ecosystem">Ecosystem</Link>
          <a href="mailto:support@vorqara.com">Support</a>
          <a href="mailto:info@vorqara.com">Contact</a>
        </div>
        <span className="endpoint-copyright">
          © 2026 Vorqara Technologies
        </span>
      </div>
    </footer>
  );
}

const devices = [
  {
    name: "FINANCE-WKS-04",
    type: "Windows 11 Pro",
    address: "10.0.4.21",
    status: "Online",
    cpu: "18%",
    memory: "62%",
    lastSeen: "Just now",
  },
  {
    name: "OPS-LAPTOP-02",
    type: "Windows 11 Pro",
    address: "10.0.4.35",
    status: "Online",
    cpu: "24%",
    memory: "48%",
    lastSeen: "1 min ago",
  },
  {
    name: "ADMIN-DESKTOP-01",
    type: "Windows 10 Pro",
    address: "10.0.4.18",
    status: "Online",
    cpu: "9%",
    memory: "71%",
    lastSeen: "2 min ago",
  },
  {
    name: "DESIGN-WKS-07",
    type: "Windows 11 Pro",
    address: "10.0.4.42",
    status: "Offline",
    cpu: "â€”",
    memory: "â€”",
    lastSeen: "28 min ago",
  },
];

function DashboardPreview() {
  return (
    <div className="endpoint-dashboard-shell">
      <div className="endpoint-dashboard-topbar">
        <div className="endpoint-dashboard-brand">
          <span className="endpoint-mini-mark">
            <ShieldCheck size={15} />
          </span>
          <span>VORQARA <b>ENDPOINT</b></span>
        </div>
        <div className="endpoint-dashboard-top-actions">
          <span className="endpoint-demo-label">DEMO ENVIRONMENT</span>
          <button aria-label="Notifications" type="button">
            <Bell size={16} />
          </button>
          <span className="endpoint-avatar">AD</span>
        </div>
      </div>

      <div className="endpoint-dashboard-body">
        <aside className="endpoint-dashboard-sidebar">
          <span className="endpoint-sidebar-caption">WORKSPACE</span>
          <div className="endpoint-workspace">
            <span className="endpoint-workspace-icon"><Network size={16} /></span>
            <span><b>Acme Organisation</b><small>Demo workspace</small></span>
            <ChevronRight size={14} />
          </div>
          <span className="endpoint-sidebar-caption">MANAGEMENT</span>
          <div className="endpoint-side-link active"><Activity size={16} /> Overview</div>
          <div className="endpoint-side-link"><Laptop size={16} /> Endpoints <span>04</span></div>
          <div className="endpoint-side-link"><Shield size={16} /> Policies</div>
          <div className="endpoint-side-link"><Bell size={16} /> Events & alerts</div>
          <div className="endpoint-side-link"><Users size={16} /> Users</div>
          <div className="endpoint-side-link"><Database size={16} /> Reports</div>
          <div className="endpoint-sidebar-bottom">
            <div className="endpoint-side-link"><Command size={16} /> Settings</div>
            <div className="endpoint-profile">
              <span className="endpoint-avatar">AD</span>
              <span><b>Admin User</b><small>Administrator</small></span>
              <MoreHorizontal size={16} />
            </div>
          </div>
        </aside>

        <main className="endpoint-dashboard-main">
          <div className="endpoint-dashboard-heading">
            <div>
              <div className="endpoint-breadcrumb">Workspace <ChevronRight size={12} /> Overview</div>
              <h3>Good morning, Admin</h3>
              <p>Here&apos;s an overview of your endpoint environment.</p>
            </div>
            <button className="endpoint-date-button" type="button">
              <Clock3 size={14} /> Last 24 hours
            </button>
          </div>

          <div className="endpoint-metric-grid">
            <div className="endpoint-metric-card">
              <span><Monitor size={16} /> Total endpoints</span>
              <strong>04</strong>
              <small>Registered devices</small>
            </div>
            <div className="endpoint-metric-card">
              <span><Wifi size={16} /> Online</span>
              <strong>03</strong>
              <small className="endpoint-positive">Agent connected</small>
            </div>
            <div className="endpoint-metric-card">
              <span><CircleAlert size={16} /> Offline</span>
              <strong>01</strong>
              <small>Awaiting check-in</small>
            </div>
            <div className="endpoint-metric-card">
              <span><ShieldCheck size={16} /> Policies</span>
              <strong>06</strong>
              <small>Configured policies</small>
            </div>
          </div>

          <div className="endpoint-dashboard-content-grid">
            <section className="endpoint-panel endpoint-device-panel">
              <div className="endpoint-panel-heading">
                <div><h4>Endpoint inventory</h4><p>Registered devices in this workspace</p></div>
                <button type="button" aria-label="More inventory options"><MoreHorizontal size={18} /></button>
              </div>
              <div className="endpoint-table-wrap">
                <table className="endpoint-device-table">
                  <thead>
                    <tr><th>DEVICE</th><th>STATUS</th><th>CPU</th><th>MEMORY</th><th>LAST SEEN</th></tr>
                  </thead>
                  <tbody>
                    {devices.map((device) => (
                      <tr key={device.name}>
                        <td>
                          <div className="endpoint-device-name"><span><Laptop size={15} /></span><div><b>{device.name}</b><small>{device.type}</small></div></div>
                        </td>
                        <td><span className={device.status === "Online" ? "endpoint-status online" : "endpoint-status offline"}><i />{device.status}</span></td>
                        <td>{device.cpu}</td>
                        <td>{device.memory}</td>
                        <td>{device.lastSeen}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="endpoint-panel-footer"><span>Showing 4 demonstration devices</span><span>View inventory <ArrowRight size={13} /></span></div>
            </section>

            <section className="endpoint-panel endpoint-activity-panel">
              <div className="endpoint-panel-heading">
                <div><h4>Recent activity</h4><p>Latest recorded events</p></div>
                <button type="button" aria-label="More activity options"><MoreHorizontal size={18} /></button>
              </div>
              <div className="endpoint-activity-list">
                <div className="endpoint-activity-item"><span className="endpoint-activity-icon blue"><Radio size={15} /></span><div><b>Agent check-in received</b><small>FINANCE-WKS-04</small><time>Just now</time></div></div>
                <div className="endpoint-activity-item"><span className="endpoint-activity-icon cyan"><RefreshCw size={15} /></span><div><b>System information updated</b><small>OPS-LAPTOP-02</small><time>8 minutes ago</time></div></div>
                <div className="endpoint-activity-item"><span className="endpoint-activity-icon purple"><ShieldCheck size={15} /></span><div><b>Policy assignment recorded</b><small>ADMIN-DESKTOP-01</small><time>22 minutes ago</time></div></div>
                <div className="endpoint-activity-item"><span className="endpoint-activity-icon amber"><Wifi size={15} /></span><div><b>Endpoint check-in missed</b><small>DESIGN-WKS-07</small><time>28 minutes ago</time></div></div>
              </div>
              <div className="endpoint-panel-footer"><span>Illustrative event records</span><span>View events <ArrowRight size={13} /></span></div>
            </section>
          </div>

          <section className="endpoint-panel endpoint-telemetry-panel">
            <div className="endpoint-panel-heading">
              <div><h4>Endpoint health snapshot</h4><p>Sample telemetry from a selected device</p></div>
              <span className="endpoint-selected-device"><span className="endpoint-status online"><i /> Online</span> FINANCE-WKS-04</span>
            </div>
            <div className="endpoint-telemetry-grid">
              <div className="endpoint-telemetry-item"><span><Cpu size={15} /> CPU usage</span><b>18%</b><div className="endpoint-progress"><i style={{ width: "18%" }} /></div></div>
              <div className="endpoint-telemetry-item"><span><Activity size={15} /> Memory usage</span><b>62%</b><div className="endpoint-progress"><i style={{ width: "62%" }} /></div></div>
              <div className="endpoint-telemetry-item"><span><HardDrive size={15} /> Disk usage</span><b>47%</b><div className="endpoint-progress"><i style={{ width: "47%" }} /></div></div>
              <div className="endpoint-telemetry-item"><span><Clock3 size={15} /> System uptime</span><b>4d 06h</b><small>Since last restart</small></div>
            </div>
          </section>
          <div className="endpoint-demo-disclaimer"><ShieldEllipsis size={14} /> Illustrative interface and sample data. Values shown are for demonstration purposes.</div>
        </main>
      </div>
    </div>
  );
}

const capabilities = [
  {
    icon: Laptop,
    title: "Endpoint registration & inventory",
    description: "Register endpoint agents and maintain a central view of enrolled devices, operating systems and system information.",
  },
  {
    icon: Activity,
    title: "Device health & telemetry",
    description: "Monitor endpoint connectivity, agent heartbeat, CPU, memory, disk usage and system uptime.",
  },
  {
    icon: ShieldCheck,
    title: "Security posture visibility",
    description: "Review supported Windows security signals, including Windows Defender, firewall, BitLocker, Secure Boot and TPM status.",
  },
  {
    icon: LockKeyhole,
    title: "Policy management",
    description: "Manage endpoint policies and organise how devices are governed across your environment.",
  },
  {
    icon: Bell,
    title: "Events & alerts",
    description: "Review recorded endpoint events and alerts through a central management interface.",
  },
  {
    icon: Users,
    title: "Organisation & access control",
    description: "Manage organisations, users and role-based access to the endpoint management environment.",
  },
  {
    icon: Terminal,
    title: "Endpoint response actions",
    description: "Use supported operational actions, including scan, isolate, restore and live shell, within controlled administrative workflows.",
  },
  {
    icon: Database,
    title: "Dashboard & reporting",
    description: "Access an operational overview of managed endpoints and generate basic reports to support endpoint administration.",
  },
];

const operations = [
  { icon: Search, title: "Scan", description: "Initiate a scan on a selected endpoint." },
  { icon: X, title: "Isolate", description: "Isolate a device through an authorised action." },
  { icon: RefreshCw, title: "Restore", description: "Restore an endpoint following isolation." },
  { icon: Terminal, title: "Live shell", description: "Access a remote command-line session." },
];

export default function EndpointPage() {
  return (
    <>
      <Header />
      <main className="endpoint-page">
        <section className="endpoint-hero">
          <div className="endpoint-container">
            <div className="endpoint-hero-copy">
              <div className="endpoint-eyebrow"><span className="endpoint-eyebrow-dot" /> VORQARA PRODUCT <span className="endpoint-beta-pill">BETA</span></div>
              <h1>Know your endpoints.<br /><span>Stay in control.</span></h1>
              <p className="endpoint-hero-description">
                Vorqara Endpoint brings endpoint visibility, device health,
                security posture and management actions into one centralised
                consoleâ€”giving teams a clearer view of the devices they manage.
              </p>
              <div className="endpoint-hero-actions">
                <a className="endpoint-primary-button" href="mailto:support@vorqara.com?subject=Vorqara%20Endpoint%20Beta%20Access">
                  Request beta access <ArrowUpRight size={17} />
                </a>
                <a className="endpoint-secondary-button" href="#capabilities">
                  Explore capabilities <ArrowRight size={16} />
                </a>
              </div>
              <div className="endpoint-hero-note"><CheckCircle2 size={15} /> Operational beta Â· Access by request</div>
            </div>
            <div className="endpoint-hero-visual">
              <div className="endpoint-visual-glow" />
              <DashboardPreview />
            </div>
          </div>
          <div className="endpoint-hero-bottom">
            <span>ENDPOINT VISIBILITY</span><i /><span>SECURITY POSTURE</span><i /><span>DEVICE MANAGEMENT</span><i /><span>OPERATIONAL CONTROL</span>
          </div>
        </section>

        <section className="endpoint-intro-section">
          <div className="endpoint-container endpoint-intro-grid">
            <div><span className="endpoint-section-kicker">THE PRODUCT</span><h2>One console for a clearer view of your endpoint environment.</h2></div>
            <div><p>Endpoints are where people work, applications run and organisational data is accessed. Vorqara Endpoint is designed to help teams see what is connected, understand device health and security posture, and manage supported endpoint operations from a central place.</p><p>It combines endpoint agent connectivity, device information, telemetry, policy management, event visibility and administrative response actions in one product experience.</p></div>
          </div>
        </section>

        <section className="endpoint-capabilities-section" id="capabilities">
          <div className="endpoint-container">
            <div className="endpoint-section-heading">
              <span className="endpoint-section-kicker">BETA CAPABILITIES</span>
              <h2>Visibility and control across the endpoint lifecycle.</h2>
              <p>Core capabilities available in the operational beta.</p>
            </div>
            <div className="endpoint-capability-grid">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <article className="endpoint-capability-card" key={capability.title}>
                    <span className="endpoint-capability-number">0{index + 1}</span>
                    <span className="endpoint-capability-icon"><Icon size={21} /></span>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    <span className="endpoint-capability-status"><Check size={13} /> Included in beta</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="endpoint-posture-section">
          <div className="endpoint-container endpoint-posture-grid">
            <div className="endpoint-posture-copy">
              <span className="endpoint-section-kicker">DEVICE SECURITY POSTURE</span>
              <h2>Look beyond whether a device is online.</h2>
              <p>Endpoint visibility is more useful when teams can also review the health and security signals reported by managed devices. Vorqara Endpoint brings supported system and security information into the device view.</p>
              <ul>
                <li><CheckCircle2 size={17} /> Windows Defender status</li>
                <li><CheckCircle2 size={17} /> Firewall status</li>
                <li><CheckCircle2 size={17} /> BitLocker status</li>
                <li><CheckCircle2 size={17} /> Secure Boot status</li>
                <li><CheckCircle2 size={17} /> TPM status</li>
              </ul>
              <p className="endpoint-small-note">Reported status depends on endpoint compatibility, agent permissions and the availability of the relevant system signal.</p>
            </div>
            <div className="endpoint-posture-visual">
              <div className="endpoint-posture-window">
                <div className="endpoint-posture-window-header"><span><Laptop size={16} /> Device security overview</span><span className="endpoint-window-dots">â€¢â€¢â€¢</span></div>
                <div className="endpoint-posture-device"><span className="endpoint-device-large-icon"><Monitor size={24} /></span><div><b>FINANCE-WKS-04</b><small>Windows endpoint Â· Demo device</small></div><span className="endpoint-status online"><i /> Online</span></div>
                <div className="endpoint-posture-list">
                  {["Windows Defender", "Windows Firewall", "BitLocker", "Secure Boot", "TPM"].map((item, index) => (
                    <div key={item}><span><ShieldCheck size={15} /> {item}</span><span className={index < 2 ? "endpoint-posture-value available" : "endpoint-posture-value reported"}>{index < 2 ? "Status available" : "Status reported"}</span></div>
                  ))}
                </div>
                <div className="endpoint-posture-footnote">Illustrative device view Â· Sample content</div>
              </div>
            </div>
          </div>
        </section>

        <section className="endpoint-response-section">
          <div className="endpoint-container">
            <div className="endpoint-section-heading">
              <span className="endpoint-section-kicker">ENDPOINT OPERATIONS</span>
              <h2>Move from visibility to action.</h2>
              <p>Authorised administrators can use supported endpoint actions as part of controlled operational workflows.</p>
            </div>
            <div className="endpoint-operations-grid">
              {operations.map((operation) => {
                const Icon = operation.icon;
                return <article className="endpoint-operation-card" key={operation.title}><span><Icon size={20} /></span><h3>{operation.title}</h3><p>{operation.description}</p></article>;
              })}
            </div>
            <div className="endpoint-operations-note"><LockKeyhole size={16} /><p>Endpoint actions should be performed by authorised users and in accordance with your organisation&apos;s policies and operational procedures.</p></div>
          </div>
        </section>

        <section className="endpoint-architecture-section">
          <div className="endpoint-container endpoint-architecture-grid">
            <div>
              <span className="endpoint-section-kicker">BUILT FOR CENTRAL MANAGEMENT</span>
              <h2>A connected view of your endpoint environment.</h2>
              <p>Vorqara Endpoint brings endpoint agents, organisation-level management and a central console together to support visibility and administration across managed devices.</p>
              <div className="endpoint-architecture-points">
                <div><span><Laptop size={18} /></span><div><b>Managed endpoints</b><small>Agent registration, check-ins and device information.</small></div></div>
                <div><span><Server size={18} /></span><div><b>Management services</b><small>Organisation, access, policy and event handling.</small></div></div>
                <div><span><Monitor size={18} /></span><div><b>Central console</b><small>Dashboard, inventory, device views and reports.</small></div></div>
              </div>
            </div>
            <div className="endpoint-architecture-visual">
              <div className="endpoint-architecture-node endpoint-node-console"><Monitor size={23} /><b>Vorqara Endpoint</b><small>Central management console</small></div>
              <div className="endpoint-architecture-lines"><i /><i /><i /></div>
              <div className="endpoint-architecture-node-row">
                <div className="endpoint-architecture-node"><Laptop size={20} /><b>Endpoint 01</b><small>Agent</small></div>
                <div className="endpoint-architecture-node"><Laptop size={20} /><b>Endpoint 02</b><small>Agent</small></div>
                <div className="endpoint-architecture-node"><Laptop size={20} /><b>Endpoint 03</b><small>Agent</small></div>
              </div>
              <span className="endpoint-architecture-caption">Conceptual product architecture</span>
            </div>
          </div>
        </section>

        <section className="endpoint-beta-cta">
          <div className="endpoint-container endpoint-beta-cta-inner">
            <div><span className="endpoint-section-kicker">JOIN THE BETA</span><h2>Get a closer look at Vorqara Endpoint.</h2><p>Interested in testing the platform or exploring how it could support your endpoint environment? Contact our team to discuss beta access.</p></div>
            <a className="endpoint-primary-button" href="mailto:support@vorqara.com?subject=Vorqara%20Endpoint%20Beta%20Access">Request beta access <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
