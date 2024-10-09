import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BoxInside({ children }: Props) {
  return (
    <div className="bg-my-green-light w-full">
        <div className="profile relative bg-my-gray-box max-w-5xl w-full rounded-lg mx-auto px-8 pt-8 pb-16 overflow-hidden">
            {children}
      </div>
      <style jsx>{`
            .profile::before {
                content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU3IiBoZWlnaHQ9IjI2MCIgdmlld0JveD0iMCAwIDI1NyAyNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjE5Mi4wMjIiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTc4IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxOTIuMDIyIDApIiBmaWxsPSIjRDlEOUQ5Ii8+CjxyZWN0IHg9IjE5Mi4wMjIiIHk9IjY0Ljk3NzUiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTc4IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxOTIuMDIyIDY0Ljk3NzUpIiBmaWxsPSIjRDlEOUQ5IiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cmVjdCB4PSIxMjcuMDQ0IiB5PSI2NC45Nzc1IiB3aWR0aD0iNjQuOTc4IiBoZWlnaHQ9IjY0Ljk3OCIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgMTI3LjA0NCA2NC45Nzc1KSIgZmlsbD0iI0Q5RDlEOSIgZmlsbC1vcGFjaXR5PSIwLjkiLz4KPHJlY3QgeD0iMTkyLjAyMiIgeT0iMTI5Ljk1NiIgd2lkdGg9IjY0Ljk3OCIgaGVpZ2h0PSI2NC45NzgiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE5Mi4wMjIgMTI5Ljk1NikiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxyZWN0IHg9IjE5Mi4wMjIiIHk9IjE5NC45MzQiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTc4IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxOTIuMDIyIDE5NC45MzQpIiBmaWxsPSIjRDlEOUQ5IiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cmVjdCB4PSIyNTciIHk9IjE5NC45MzQiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTc4IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyNTcgMTk0LjkzNCkiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxyZWN0IHg9IjY1LjcyNjQiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTc4IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NS43MjY0IDApIiBmaWxsPSIjRDlEOUQ5IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8L3N2Zz4K);
                display: block;
                top: 0;
                right: 0;
                position: absolute;
                z-index: 0;
            }
            .profile::after {
                content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI2MSIgdmlld0JveD0iMCAwIDI1NiAyNjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjY0LjkxNDIiIHk9IjI2MC4yMSIgd2lkdGg9IjY0Ljk3OCIgaGVpZ2h0PSI2NC45MTQyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNjQuOTE0MiAyNjAuMjEpIiBmaWxsPSIjRDlEOUQ5Ii8+CjxyZWN0IHg9IjY0LjkxNDIiIHk9IjE5NS4yMzIiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTE0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDY0LjkxNDIgMTk1LjIzMikiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxyZWN0IHg9IjEyOS44MjgiIHk9IjE5NS4yMzIiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTE0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyOS44MjggMTk1LjIzMikiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxyZWN0IHg9IjY0LjkxNDIiIHk9IjEzMC4yNTQiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTE0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDY0LjkxNDIgMTMwLjI1NCkiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxyZWN0IHg9IjY0LjkxNDIiIHk9IjY1LjI3NjQiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTE0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDY0LjkxNDIgNjUuMjc2NCkiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxyZWN0IHk9IjY1LjI3NjQiIHdpZHRoPSI2NC45NzgiIGhlaWdodD0iNjQuOTE0MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDAgNjUuMjc2NCkiIGZpbGw9IiNEOUQ5RDkiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxyZWN0IHg9IjE5MS4wODYiIHk9IjI2MC4yMSIgd2lkdGg9IjY0Ljk3OCIgaGVpZ2h0PSI2NC45MTQyIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTkxLjA4NiAyNjAuMjEpIiBmaWxsPSIjRDlEOUQ5IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8L3N2Zz4K);
                display: block;
                bottom: -10px;
                left: 0;
                position: absolute;
                z-index: 0;
            }
        `}</style>
    </div>
  );
}