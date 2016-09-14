FROM microsoft/dotnet

RUN mkdir -p /dotnetapp
COPY . /dotnetapp

WORKDIR /dotnetapp/NetExpress
RUN dotnet restore

ENTRYPOINT ["dotnet", "run"]

